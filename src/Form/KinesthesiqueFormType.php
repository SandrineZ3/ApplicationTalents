<?php

namespace App\Form;

use App\Entity\Kinesthesique;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class KinesthesiqueFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('question', TextareaType::class, [
                'label' => 'Question',
                'required' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner une question',
                    ]),],])
            ->add('answer1', TextareaType::class, [
                'label' => 'Reponse1',
                'required' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner une première réponse',
                    ]),],])
            ->add('answer2', TextareaType::class, [
                'label' => 'Reponse2',
                'required' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner une deuxième réponse',
                    ]),],])
            ->add('answer3', TextareaType::class, [
                'label' => 'Reponse3',
                'required' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner une troisième réponse',
                    ]),],])
            ->add('solution', ChoiceType::class, [
                'choices' => [
                    'Réponse 1' => 1,
                    'Réponse 2' => 2,
                    'Réponse 3' => 3,
                ],
                'multiple' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner la solution',
                    ]),
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Kinesthesique::class,
        ]);
    }
}
