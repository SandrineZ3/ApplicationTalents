<?php

namespace App\Controller;

use App\Form\ChangePasswordFormType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    /**
     * @Route("admin/user/update_password", name="user_update_password")
     */
    public function updatePassword(Request $request, UserRepository $userRepository, EntityManagerInterface $entityManager): Response
    {
        $user = $userRepository->find($this->getUser());

        $changePasswordFormType = $this->createForm(ChangePasswordFormType::class, $user);
        $changePasswordFormType = $changePasswordFormType->handleRequest($request);

        if ($changePasswordFormType->isSubmitted() && $changePasswordFormType->isValid()) {
            $entityManager->flush();
            $this->addFlash('success', 'Le mot de passe a été modifié');

            return $this->redirectToRoute('admin_dashboard');
        }

        return $this->render('user/update_password.html.twig', [
            'changePasswordFormType' => $changePasswordFormType->createView(),
            'user' => $user,
        ]);
    }

    /**
     * @Route("admin/user/{id}/delete", name="user_delete", requirements={"id"="\d+"})
     */
    public function delete(int $id, EntityManagerInterface $entityManager, UserRepository $userRepository): Response
    {
        $user = $userRepository->find($id);
        if (!$user) {
            $this->addFlash('error', 'L\'utilisateur recherché n\'existe pas');
            return $this->redirectToRoute('main');
        }

        $entityManager->remove($user);
        $entityManager->flush();

        $this->addFlash('success', 'L\'utilisateur a bien été supprimée');
        return $this->redirectToRoute('admin_user');
    }
}
