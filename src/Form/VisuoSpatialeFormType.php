<?php

namespace App\Form;

use App\Entity\LevelOfDifficulty;
use App\Entity\VisuoSpatiale;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\Validator\Constraints\NotBlank;

class VisuoSpatialeFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        if ($options['update']) {
            $builder
                ->add('image', FileType::class, [
                    'label' => 'Image',
                    'required' => false,
                    'mapped' => false,
                    'attr' => ['onchange' => 'addPreviewImage(this)'],
                    'constraints' => [
                        new Image([
                            'maxSize' => '1024k',
                            'mimeTypes' => [
                                'image/png',
                                'image/jpeg',
                            ]
                        ])
                    ],
                ]);
        }
        else {
            $builder
                ->add('image', FileType::class, [
                    'label' => 'Image',
                    'required' => false,
                    'mapped' => false,
                    'attr' => ['onchange' => 'addPreviewImage(this)'],
                    'constraints' => [
                        new NotBlank([
                            'message' => 'Veuillez télécharger une image',
                        ]),
                        new Image([
                            'maxSize' => '1024k',
                            'mimeTypes' => [
                                'image/png',
                                'image/jpeg',
                            ]
                        ])
                    ],
                ]);
        }
        $builder
            ->add('solution', ChoiceType::class, [
                'label' => 'Solution',
                'required' => false,
                'expanded' => true,
                'multiple' => false,
                'placeholder' => false,
                'choices'  => [
                    'A' => 'A',
                    'B' => 'B',
                    'C' => 'C',
                    'D' => 'D',
                ],
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
            'data_class' => VisuoSpatiale::class,
            'update' => false
        ]);
    }
}
