import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import React from 'react'
import { type RoutesProps } from 'react-router-dom'

export enum RoutesPath {
    MAIN = '/',
    ABOUT = '/about',
    PROFILE = '/profile',
    NOTFOUND = '*'
}

interface Routes extends RoutesProps {
    path: string
    element: React.ReactNode
    authOnly?: boolean
}

export const routes: Routes[] = [
    { path: RoutesPath.MAIN, element: <MainPage/> },
    { path: RoutesPath.ABOUT, element: <AboutPage/> },
    { path: RoutesPath.PROFILE, authOnly: true, element: <ProfilePage/> },
    { path: RoutesPath.NOTFOUND, element: <NotFoundPage/> }
]
