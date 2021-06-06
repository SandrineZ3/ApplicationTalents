<?php

namespace App\Form;

use App\Entity\LevelOfDifficulty;
use App\Entity\Musicale;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\GreaterThanOrEqual;
use Symfony\Component\Validator\Constraints\NotBlank;

class MusicaleFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('numberOfRows', IntegerType::class, [
                'label' => 'Nombre de lignes',
                'required' => false,
                'attr'=> ['min' => '1', 'max' => '6'],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner le nombre de lignes',
                    ]),
                    new GreaterThanOrEqual([
                        'value' => 1,
                        'message' => 'Le nombre de lignes doit être supérieure ou égale à {{ compared_value }}',
                    ]),
                ],
            ])
            ->add('numberOfColumns', IntegerType::class, [
                'label' => 'Nombre de colonnes',
                'required' => false,
                'attr'=> ['min' => '2', 'max' => '20'],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner le nombre de colonnes',
                    ]),
                    new GreaterThanOrEqual([
                        'value' => 2,
                        'message' => 'Le nombre de colonnes doit être supérieure ou égale à {{ compared_value }}',
                    ]),
                ],
            ])
            ->add('solution', TextType::class, [
                'label' => 'Solution',
                'required' => false,
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
            'data_class' => Musicale::class,
        ]);
    }
}
