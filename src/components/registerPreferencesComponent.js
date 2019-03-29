import { Component } from 'react';
import { Form } from 'final-form';

import '../styles/signBaseComponent.scss';
import { Form, Field } from 'react-final-form';
import { TextField } from 'react-final-form-antd';

import { Input } from 'antd';

import CustomField from './CustomField';

class RegisterPreferenesComponent extends Component {

    handleChange() {
        print("AA");
    }

    validateForm() {
        print("BB");
    }

    render() {
        return (
            <From 
                onSubmit={handleChange}
                validate={validateForm}
                render={({ handleSubmit, pristine, invalid }) => (
                    <Field
                        name={"Podaj nazwę"}
                        component={TextField}
                    >

                    </Field>
                )}
            />
        );
    }

}

export default SignBaseComponent;