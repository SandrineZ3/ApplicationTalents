<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('username', TextType::class, [
                'label' => 'Pseudo',
                'required' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre pseudo',
                    ]),
                    new Length([
                        'min' => 4,
                        'minMessage' => 'Votre pseudo doit contenir au minimum {{ limit }} caractères',
                        'max' => 180,
                        'maxMessage' => 'Votre pseudo doit contenir au maximum {{ limit }} caractères',
                    ]),
                ],
            ])
            ->add('plainPassword', HiddenType::class, [
                'mapped' => false,
                'data' => 'password',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre mot de passe',
                    ]),
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Votre mot de passe doit contenir au minimum {{ limit }} caractères',
                        'max' => 255,
                        'maxMessage' => 'Votre mot de passe doit contenir au maximum {{ limit }} caractères',
                    ]),
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
