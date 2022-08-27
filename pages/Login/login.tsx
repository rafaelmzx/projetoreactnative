import { SafeAreaView, Text, TextInput, View, Button, Image } from 'react-native';
import { loginStyles } from '../../assets/style/login-style';


export function Login() {
  return (
    <View style={loginStyles.container}>
        <View style={loginStyles.header}>
            <Text>Login</Text>
        </View>

        <SafeAreaView>
            <Image style={loginStyles.image} source={{uri:'https://img.freepik.com/vetores-premium/logotipo-do-fogo_23-2147507557.jpg?w=826'}}></Image>
            <TextInput style={loginStyles.inputs} placeholder='Email'></TextInput>
            <TextInput style={loginStyles.inputs} placeholder='Password'></TextInput>
            <Button title='Log In'></Button>

            <Text>Don`t have an account ?</Text><a>Sign Up</a>
        </SafeAreaView>


    </View>
  );
}

