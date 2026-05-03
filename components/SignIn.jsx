import {
    Text,
    TextInput,
    View,
    Pressable,
    StyleSheet,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { Formik, useField } from 'formik';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
    },
    formContainer: {
        backgroundColor: '#fff',
        padding: 20,
        paddingTop: 45,
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 15,
        backgroundColor: '#fafafa',
        placeholderTextColor: '#939191',
    },
    button: {
        backgroundColor: '#007AFF',
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});

const initialValues = {
    username: '',
    password: ''
};

const FormSignin = ({ onSubmit }) => {
    const userField = useField('username');
    const passField = useField('password');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.formContainer}>
                <TextInput
                    placeholder='Username'
                    style={styles.input}
                    id='username'
                    name={userField[0].name}
                    value={userField[0].value}
                    onChangeText={value => userField[2].setValue(value)}
                />
                <TextInput
                    placeholder='Password'
                    style={styles.input}
                    id='pass'
                    name={passField[0].name}
                    value={passField[0].value}
                    secureTextEntry={true}
                    onChangeText={value => passField[2].setValue(value)}
                />

                <Pressable onPress={onSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    );
};

const SignIn = () => {

    const onSubmit = (values) => {
        console.log('Desde el Signin:', values);
    }

    return (
        <View style={styles.container}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ handleSubmit }) => <FormSignin onSubmit={handleSubmit} />}
            </Formik>
        </View>
    );
};

export default SignIn;