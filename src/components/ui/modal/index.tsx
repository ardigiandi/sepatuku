import { Dispatch, useEffect, useRef } from "react"

type PropTypes = {
    children: React.ReactNode
    onClose: any
}

const Modal = (props: PropTypes) => {
    const { children, onClose } = props

    const ref: any = useRef()
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose()
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown ', handleClickOutside)
        }
    }, [onClose])
    return (
        <div className="fixed top-0 w-[100vw] h-[100vh] z-[1000] bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-[#fff] p-5 w-[50vw] max-h-[80vh]" ref={ref}>
                {children}
            </div>
        </div>
    )
}

export default Modal
