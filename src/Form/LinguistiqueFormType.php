<?php

namespace App\Form;

use App\Entity\LevelOfDifficulty;
use App\Entity\Linguistique;
use App\Entity\Picto;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\Validator\Constraints\NotBlank;

class LinguistiqueFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('text', TextareaType::class, [
                'label' => 'Phrase',
                'required' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner une phrase à traduire en pictogrammes',
                    ]),],])
            ->add('solution', EntityType::class, [
                'class' => Picto::class,
                'required' => false,
                'expanded' => true,
                'multiple' => true,
                'placeholder' => false,
                'choice_label' => 'label',
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
            ]);
    }

//    private function addUrlPictoFields(FormInterface $form)
//    {
//        $tableau = array();
//        foreach ($tableau as $element) {
//            $form
//                ->add($element, FileType::class, [
//                    'label' => 'Picto',
//                    'required' => false,
//                    'mapped' => false,
//                    'constraints' => [
//                        new NotBlank([
//                            'message' => 'Veuillez télécharger un pictogramme',
//                        ]),
//                        new Image([
//                            'maxSize' => '1024k',
//                            'mimeTypes' => [
//                                'image/png',
//                                'image/jpeg',
//                            ]
//                        ])
//                    ],
//                ]);
//        }
//    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Linguistique::class,
        ]);
    }
}

