import React from 'react'
import { Formik, Form } from 'formik'

export class PiFormProps {
  initialValues: any
  validationSchema: any
  handleSubmit: (e: any) => void
  component?: any
  handleRef:(e: any) => void
}

export default function PiForm(props: React.PropsWithChildren<PiFormProps>) {

  return (
    <Formik
      validationSchema={props.validationSchema}
      onSubmit={props.handleSubmit}
      initialValues={props.initialValues}
      innerRef={props.handleRef}
    >
      {({ ...formik }: any) => {
        return (
          <Form>
            <props.component formik={formik}></props.component>
          </Form>
        )
      }}
    </Formik>
  )
}
