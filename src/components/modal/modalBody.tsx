import React from 'react'
import { ModalBody } from '@atlaskit/modal-dialog'

class PiModalBodyProps {}

function PiModalBody(props: React.PropsWithChildren<PiModalBodyProps>) {
  return <ModalBody>{props.children}</ModalBody>
}

export default React.memo(PiModalBody)
