import React from 'react'
import { ModalFooter } from '@atlaskit/modal-dialog'

class PiModalFooterProps {}

function PiModalFooter(props: React.PropsWithChildren<PiModalFooterProps>) {
  return (
    <ModalFooter>
      <div
        style={{
          display: 'flex',
          gap: '16px',
          width: '100%',
          justifyContent: 'end'
        }}
      >
        {props.children}
      </div>
    </ModalFooter>
  )
}

export default React.memo(PiModalFooter)
