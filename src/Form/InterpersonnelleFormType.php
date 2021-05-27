<?php

namespace App\Form;

use App\Entity\Emoticon;
use App\Entity\Interpersonnelle;
use App\Entity\LevelOfDifficulty;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class InterpersonnelleFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('urlVideo', TextType::class, [
                'label' => 'Lien vidéo Youtube',
                'required' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner l\'url de la vidéo',
                    ]),
                    new Length([
                        'max' => 255,
                        'maxMessage' => 'Votre pseudo doit contenir au maximum {{ limit }} caractères',
                    ]),
                ],
            ])
            ->add('solution', EntityType::class, [
                'class' => Emoticon::class,
                'required' => false,
                'expanded' => true,
                'multiple' => false,
                'placeholder' => false,
                'choice_label' => 'urlImage',
                'attr' => ['test' => 'test'],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner la solution',
                    ]),
                ],
            ])
            ->add('levelOfDifficulty', EntityType::class, [
                'class' => LevelOfDifficulty::class,
                'label' => 'Difficulté',
                'required' => false,
                'expanded' => false,
                'multiple' => false,
                'placeholder' => 'Choisir la difficulté',
                'choice_label' => 'label',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner la difficulté',
                    ]),
                ],
            ])
            ->add('save', SubmitType::class, [
                'label' => 'Enregistrer',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Interpersonnelle::class,
        ]);
    }
}
