import React from 'react'
import { ModalHeader } from '@atlaskit/modal-dialog'

class PiModalHeaderProps {}

function PiModalHeader(props: React.PropsWithChildren<PiModalHeaderProps>) {
  return <ModalHeader>{props.children}</ModalHeader>
}

export default React.memo(PiModalHeader)
