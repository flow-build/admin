import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import * as S from './styles'

const Modal = ({ isModalOpen, closeModal, children, size }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(isModalOpen)
  }, [isModalOpen])

  const handleCloseModal = (e) => {
    e.preventDefault()

    setIsOpen(false)

    const timeOut = setTimeout(() => {
      closeModal(null)
    }, 400)

    return () => clearTimeout(timeOut)
  }

  if (!isModalOpen) return null
  return (
    <S.Container>
      <S.Content size={size} isOpen={isOpen}>
        <S.CloseButton
          aria-label="close modal"
          onClick={(e) => handleCloseModal(e)}
        >
          X
        </S.CloseButton>

        {children}
      </S.Content>

      <S.Background onClick={(e) => handleCloseModal(e)} />
    </S.Container>
  )
}

Modal.propTypes = {
  isModalOpen: PropTypes.any,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.func.isRequired,
    PropTypes.element.isRequired,
  ]).isRequired,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
}

export default Modal
