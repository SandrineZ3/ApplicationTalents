<?php

namespace App\Form;

use App\Entity\Emoticon;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class EmoticonFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('label', TextType::class, [
                'label' => 'Nom',
                'required' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner le nom de l\'émoticône',
                    ]),
                    new Length([
                        'max' => 255,
                        'maxMessage' => 'Le nom de l\'émoticône doit contenir au maximum {{ limit }} caractères',
                    ]),
                ],
            ]);
        if ($options['update']) {
            $builder
                ->add('image', FileType::class, [
                    'label' => 'Image',
                    'required' => false,
                    'mapped' => false,
                    'attr' => ['onchange' => 'addPreviewImage(this, 80, 80)'],
                    'constraints' => [
                        new Image([
                            'maxSize' => '512k',
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
                    'attr' => ['onchange' => 'addPreviewImage(this, 80, 80)'],
                    'constraints' => [
                        new NotBlank([
                            'message' => 'Veuillez télécharger une image',
                        ]),
                        new Image([
                            'maxSize' => '512k',
                            'mimeTypes' => [
                                'image/png',
                                'image/jpeg',
                            ]
                        ])
                    ],
                ]);
        }
        $builder
            ->add('save', SubmitType::class, [
                'label' => 'Enregistrer',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Emoticon::class,
            'update' => false
        ]);
    }
}
