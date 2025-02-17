import React from 'react'
import { ModalTitle } from '@atlaskit/modal-dialog'

export class PiModalTitleProps {
  appearance?: 'danger' | 'warning'
  isMultiline?: boolean
}

function PiModalTitle(props: React.PropsWithChildren<PiModalTitleProps>) {
  return (
    <ModalTitle appearance={props.appearance} isMultiline={props.isMultiline}>
      {props.children}
    </ModalTitle>
  )
}

export default React.memo(PiModalTitle)
