<?php

namespace App\Form;

use App\Entity\LevelOfDifficulty;
use App\Entity\Naturaliste;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
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
            ->add('solution', TextareaType::class, [
                'label' => 'Solution',
                'required' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner la solution',
                    ]),
                    new Length([
                        'max' => 255,
                        'maxMessage' => 'Votre pseudo doit contenir au maximum {{ limit }} caractères',
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
                    'label' => 'Image',
                    'required' => false,
                    'mapped' => false,
                    'constraints' => [
                        new NotBlank([
                            'message' => 'Veuillez télécharger une image',
                        ]),
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
                    'label' => 'Image',
                    'required' => false,
                    'mapped' => false,
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