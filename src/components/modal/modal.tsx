import React from 'react'
import Modal, { ModalTransition } from '@atlaskit/modal-dialog'
import { PiModalClass } from './modal.css'

export class PiModalProps {
  height?: number | string
  width?: number | 'small' | 'medium' | 'large' | 'x-large' | 'auto'
  onClose?: () => void
  isOpen: boolean
  className?: string
}

function PiModal(props: React.PropsWithChildren<PiModalProps>) {
  return (
    <div className={PiModalClass}>
      <ModalTransition>
        {props.isOpen && (
          <Modal
            onClose={props.onClose}
            width={props.width}
            height={props.height}
          >
            {props.children}
          </Modal>
        )}
      </ModalTransition>
    </div>
  )
}

export default React.memo(PiModal)
