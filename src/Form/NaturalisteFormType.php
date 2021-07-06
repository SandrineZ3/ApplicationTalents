<?php

namespace App\Form;

use App\Entity\LevelOfDifficulty;
use App\Entity\Naturaliste;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\RadioType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class NaturalisteFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        if ($options['update']) {
            $builder->addEventListener(
                FormEvents::POST_SET_DATA,
                function (FormEvent $event) {
                    $form = $event->getForm();
                    $this->addUrlImageFieldsUpdate($form);
                }
            );
        }
        else {
            $builder->addEventListener(
                FormEvents::POST_SET_DATA,
                function (FormEvent $event) {
                    $form = $event->getForm();
                    $this->addUrlImageFields($form);
                }
            );
        }

        $builder
            ->add('solution', ChoiceType::class, [
                'label' => 'Solution',
                'required' => false,
                'expanded' => true,
                'multiple' => false,
                'placeholder' => false,
                'choices'  => [
                    'Image1' => 1,
                    'Image2' => 2,
                    'Image3' => 3,
                    'Image4' => 4,
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

    private function addUrlImageFields(FormInterface $form)
    {
        $tableau = array('image1', 'image2', 'image3', 'image4');
        foreach ($tableau as $element){
            $form
                ->add($element, FileType::class, [
                    'label' => ucfirst($element),
                    'required' => false,
                    'mapped' => false,
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
    }
    private function addUrlImageFieldsUpdate(FormInterface $form)
    {
        $tableau = array('image1', 'image2', 'image3', 'image4');
        foreach ($tableau as $element){
            $form
                ->add($element, FileType::class, [
                    'label' => ucfirst($element),
                    'required' => false,
                    'mapped' => false,
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
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Naturaliste::class,
            'update' => false
        ]);
    }
}
