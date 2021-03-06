<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitdb344ab3e2f0cb759a8219e4865eca76
{
    public static $prefixLengthsPsr4 = array (
        'M' => 
        array (
            'Medoo\\' => 6,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Medoo\\' => 
        array (
            0 => __DIR__ . '/..' . '/catfan/medoo/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'M' => 
        array (
            'Monolog' => 
            array (
                0 => __DIR__ . '/..' . '/monolog/monolog/src',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitdb344ab3e2f0cb759a8219e4865eca76::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitdb344ab3e2f0cb759a8219e4865eca76::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInitdb344ab3e2f0cb759a8219e4865eca76::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}
