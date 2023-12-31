/*
 * Copyright (c) 21.11.2021, 23:24  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import { IGenericModel } from '@/core/models/interfaces/app/IGenericModel'

export interface IUser extends IGenericModel {
    role: number
    token: string
    email: string
    password: string
    avatar: string
    username: string
    lastRecaptchaDate: Date
    lastLoginDate: Date
    registrationDate: Date
    isAuthorized: boolean
}
