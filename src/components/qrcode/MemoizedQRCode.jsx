import React, { memo } from "react"
import QRCode from 'react-qr-code'

const MemoizedQRCode = ({ value, size, className }) => {
  return <QRCode value={value} size={size} className={className} />
}

export default memo(MemoizedQRCode)
