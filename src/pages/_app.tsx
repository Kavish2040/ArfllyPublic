import { CoreLayout } from '@/components';
import { useGlobalState } from '@/store';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import '../styles/globals.css';

export default function App(props: AppProps) {
    const { Component, pageProps } = props;
    const { showLoading, hideLoading } = useGlobalState();

    Router.events.on('routeChangeComplete', () => hideLoading());
    Router.events.on('routeChangeStart', () => showLoading());
    Router.events.on('routeChangeError', () => hideLoading());

    return (
        <>
            <Head>
                <title>Artflly</title>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
            </Head>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
                    cursorType: 'pointer',
                    headings: {
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
                        fontWeight: 700,
                        sizes: {
                            h1: { fontSize: '2.5rem', fontWeight: 600 },
                            h2: { fontSize: '2rem', fontWeight: 600 },
                            h3: { fontSize: '1.75rem', fontWeight: 600 },
                        },
                    },
                    colors: {
                        gray: ['#F8F9FA', '#F1F3F5', '#E9ECEF', '#DEE2E6', '#CED4DA', '#ADB5BD', '#868E96', '#495057', '#343A40', '#212529'],
                    },
                    primaryColor: 'gray',
                    black: '#1D1D1F',
                    white: '#FFFFFF',
                    other: {
                        colors: {
                            main: '#343A40',
                            bg: '#FFFFFF',
                            mainLight: '#868E96',
                            brown: '#69594C',
                            beige: '#D1C9BF',
                            offBlack: '#1D1D1F',
                            secondaryText: '#495057',
                            border: '#E9ECEF',
                            borderInfo: '#DEE2E6',
                            footerFont: '#F8F9FA',
                            inputBackground: '#F8F9FA',
                            checkboxBorder: '#CED4DA',
                            paperBackground: '#FFFFFF',
                        },
                    },
                    globalStyles: (theme) => ({
                        '.clickable': {
                            cursor: 'pointer',
                        },
                        '.image-gallery-thumbnail.active, .image-gallery-thumbnail:focus': {
                            outline: 'none',
                            border: `2px solid ${theme.black}`,
                        },
                        '.image-gallery-thumbnail': {
                            height: '100px',
                            border: `1px solid ${theme.colors.gray[3]}`,
                            borderRadius: theme.radius.md,
                        },
                    }),
                    components: {
                        Header: {
                            styles: (theme) => ({
                                root: {
                                    borderBottom: `1px solid ${theme.colors.gray[3]}`,
                                },
                            }),
                        },
                        Tabs: {
                            styles: (theme) => ({
                                tabsList: {
                                    borderBottom: '0px',
                                },
                                tab: {
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: theme.fontSizes.lg,
                                    fontWeight: 500,
                                    color: theme.colors.gray[6],
                                    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
                                    borderRadius: theme.radius.md,
                                    transition: 'color 0.2s ease, background-color 0.2s ease',

                                    '&:hover': {
                                        color: theme.black,
                                        backgroundColor: 'transparent',
                                    },

                                    '&[data-active]': {
                                        color: theme.black,
                                        fontWeight: 600,
                                        backgroundColor: 'transparent',
                                    },
                                },
                            }),
                        },
                        Accordion: {
                            styles: (theme) => ({
                                item: {
                                    borderBottom: `1px solid ${theme.other.colors.borderInfo}`,
                                },
                                content: {
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                },
                            }),
                        },
                        Button: {
                            variants: {
                                outline: (theme) => ({
                                    root: {
                                        borderColor: theme.colors.gray[4],
                                        color: theme.black,
                                        borderRadius: theme.radius.xl,
                                        '&:hover': {
                                            backgroundColor: theme.colors.gray[1],
                                        },
                                    },
                                }),
                                filled: (theme) => ({
                                    root: {
                                        backgroundColor: theme.black,
                                        borderRadius: theme.radius.xl,
                                        '&:hover': {
                                            backgroundColor: '#333333',
                                        },
                                        '&[data-disabled]': {
                                            backgroundColor: theme.colors.gray[3],
                                            opacity: 0.8,
                                            color: theme.white,
                                        },
                                    },
                                }),
                                default: (theme) => ({
                                    root: {
                                        backgroundColor: theme.colors.gray[2],
                                        color: theme.black,
                                        borderColor: theme.colors.gray[2],
                                        borderRadius: theme.radius.xl,
                                        '&:hover': {
                                            backgroundColor: theme.colors.gray[3],
                                        },
                                    },
                                }),
                                subtle: (theme) => ({
                                    root: {
                                        color: theme.other.colors.offBlack,
                                        paddingLeft: 0,
                                        '&:hover': {
                                            backgroundColor: 'white',
                                        },
                                    },
                                    inner: {
                                        justifyContent: 'left',
                                    },
                                }),
                            },
                            styles: (theme) => ({
                                label: {
                                    fontSize: theme.fontSizes.sm,
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 500,
                                },
                            }),
                        },
                        SegmentedControl: {
                            styles: (theme) => ({
                                root: {
                                    backgroundColor: 'white',
                                    width: '142px',
                                    color: theme.other.colors.main,
                                },
                                label: {
                                    color: theme.other.colors.main,
                                    '&[data-active]': {
                                        color: 'white',
                                    },
                                    '&[data-active]:hover': {
                                        color: 'white',
                                    },
                                },
                                indicator: {
                                    backgroundColor: theme.other.colors.main,
                                },
                            }),
                        },
                        InputWrapper: {
                            styles: (theme) => ({
                                label: {
                                    color: theme.black,
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    fontFamily: "'Inter', sans-serif",
                                    marginBottom: '8px',
                                },
                                required: {
                                    color: theme.colors.red[6],
                                },
                                description: {
                                    paddingBottom: '16px',
                                },
                            }),
                        },
                        Input: {
                            styles: (theme) => ({
                                input: {
                                    border: `1px solid ${theme.colors.gray[4]}`,
                                    borderRadius: theme.radius.md,
                                    backgroundColor: theme.white,
                                    color: theme.black,
                                    fontSize: theme.fontSizes.sm,
                                    fontWeight: 400,
                                    '&:focus': {
                                        borderColor: theme.colors.gray[6],
                                    },
                                    '::placeholder': {
                                        color: theme.colors.gray[5],
                                        fontSize: theme.fontSizes.sm,
                                        fontFamily: "'Inter', sans-serif",
                                    },
                                },
                            }),
                        },
                        PasswordInput: {
                            styles: (theme) => ({
                                innerInput: {
                                    color: theme.black,
                                    fontSize: theme.fontSizes.sm,
                                    fontWeight: 400,
                                    '::placeholder': {
                                        color: theme.colors.gray[5],
                                        fontSize: theme.fontSizes.sm,
                                        fontFamily: "'Inter', sans-serif",
                                    },
                                },
                            }),
                        },
                        Modal: {
                            styles: (theme) => ({
                                title: {
                                    fontSize: '24px',
                                },
                            }),
                        },
                        Radio: {
                            styles: (theme) => ({
                                label: {
                                    fontSize: '0.875rem',
                                    fontWeight: 400,
                                },
                            }),
                        },
                        Slider: {
                            styles: (theme) => ({
                                mark: {
                                    display: 'none',
                                },
                                markLabel: {
                                    marginTop: '-40px',
                                },
                                track: {
                                    height: '2px',
                                    color: theme.other.colors.main,
                                },
                                bar: {
                                    backgroundColor: theme.other.colors.main,
                                },
                                thumb: {
                                    borderWidth: '1px',
                                    borderColor: theme.other.colors.beige,
                                },
                            }),
                        },
                        Checkbox: {
                            styles: (theme) => ({
                                input: {
                                    borderColor: theme.other.colors.checkboxBorder,
                                    borderRadius: 0,
                                    ':checked': {
                                        backgroundColor: theme.black,
                                        borderColor: theme.black,
                                    },
                                },
                                label: {
                                    color: theme.black,
                                    fontSize: '0.875rem',
                                    fontWeight: 400,
                                },
                            }),
                        },
                        Badge: {
                            variants: {
                                outline: (theme) => ({
                                    root: {
                                        borderRadius: 0,
                                        borderColor: theme.other.colors.beige,
                                    },
                                }),
                            },
                        },
                        Stepper: {
                            styles: (theme) => ({
                                step: {
                                    display: 'table-column-group',
                                    height: '42px',
                                    width: '42px',
                                },
                                stepIcon: {
                                    fontSize: 0,
                                    borderColor: theme.other.colors.main,
                                },
                                stepLabel: {
                                    marginTop: '10px',
                                },
                                stepBody: {
                                    marginLeft: 0,
                                },
                            }),
                        },
                    },
                }}
            >
                <Notifications />
                <CoreLayout>
                    <Component {...pageProps} />
                </CoreLayout>
            </MantineProvider>
        </>
    );
}
