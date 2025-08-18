import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="relative md:-mt-[100px] not-prose">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                <div className="pt-0 md:pt-[76px] pointer-events-none"></div>
                <div className="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
                    <div className="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
                            <Trans
                                i18nKey="hero.titleRich"
                                components={{
                                    br: <br className="hidden lg:block" />,
                                    harpo: <span className="hidden lg:inline" />,
                                    zk: <span className="text-primary-500" />,
                                }}
                            />
                        </h1>
                        <div className="max-w-3xl mx-auto lg:max-w-none">
                            <p className="text-xl text-muted mb-6 dark:text-slate-300">
                                <Trans
                                    i18nKey="hero.infrastructureTop"
                                    components={{
                                        crypto: (
                                            <span className="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2" />
                                        ),
                                    }}
                                />
                                <br />
                                <br />
                                {t('hero.infrastructureBottom')}
                            </p>
                            <div className="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl">

                                <div className="flex w-full sm:w-auto">
                                    <a
                                        className="btn btn-primary sm:mb-0 w-full"
                                        href="/about-harpo-zk"
                                    >
                                        {t('hero.learnMore')}
                                    </a>
                                </div>

                                <div className="flex w-full sm:w-auto">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/2">
                        <img
                            src="/assets/images/Heroimage.jpg"
                            width={493}
                            height={616}
                            alt="harpo zk"
                            className="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
