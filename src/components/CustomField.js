import React, { Fragment } from "react";
import { Field, FormSpy } from "react-final-form";

class CustomFieldAdapter extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.meta.active && this.props.onChange) {
      this.props.onChange(this.props.input.value, prevProps.input.value);
    }
  }

  render() {
    return this.props.children;
  }
}

export default ({ name, onChange, ...rest }) => (
  <Field
    name={name}
    subscription={{ value: true, active: true }}
    render={props => (
      <CustomFieldAdapter {...props} onChange={onChange}>
        <Field name={name} {...rest} />
      </CustomFieldAdapter>
    )}
  />
);
