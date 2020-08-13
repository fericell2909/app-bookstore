<template>
    <Main>
        <h2 class="text-center">Registrarse</h2>
        <v-form ref="signUpForm" 
            class="pt-4 px-4"
            @submit.prevent="signUp"
            >
            <v-row>
                <v-text-field label="Nombre" outlined
                    v-model="user.name"
                />
            </v-row>
            <v-row>
                <v-text-field label="Apellido" outlined
                    v-model="user.lastname"/>
            </v-row>
            <v-row>
                <v-text-field label="Email" outlined
                    v-model="user.email"/>
            </v-row>
            <v-row>
                <v-text-field type="password" label="contraseña" outlined
                    v-model="user.password"/>
            </v-row>
            <v-row>
                |<v-btn type="submit" x-large color="black" dark width="100%">
                    Ingresar
                </v-btn>
            </v-row>
            <v-row justify="end">
                <p class="pt-4">¿Tienes cuenta?
                <router-link
                    to="/signin" class="blue--text lighten-2"
                >incia sesión</router-link>
                </p>
            </v-row>
        </v-form>
    </Main>  
</template>
<script >
import Main from  '../components/Main'
export default {
    name : 'SingUp',
    components : {
        Main
    },
    data(){
        return {
            user :{
                name : '',
                lastname: '',
                email : '',
                password: ''
            }
        }
    },
    methods: {
        signUp(){
            console.log('whateva')
        }
    }
}
</script>>
