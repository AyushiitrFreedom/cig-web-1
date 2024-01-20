import React, { useState, Fragment } from 'react'
import './Modal.css';
import Pupup from './Popup'
import UKUMEVENT from '../Images/UKUM-EVENT.png'
import IndustrailVisit from '../Images/Industrail-Visit.png'
import InstituteResearchDay from '../Images/Institute-Research-day.png'
import { Dialog, Transition } from '@headlessui/react'
function ModalBox() {

    let [isOpen, setIsOpen] = useState(false)
    let [content, setContent] = useState('')

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
        // setContent()
    }

    function contentSet(content) {
        setContent(content)
    }




    return (
        <>
            <div className='events-pop-up'>
                <div className='events-pop-up-heading'>
                    <h1>Events </h1>
                </div>
                <div className="events-pop-up-cards">
                    <div className="events-pop-up-cards-1">
                        <div className="events-pop-up-cards-1-content-1">
                            <img src={UKUMEVENT} alt='case study' className='events-pop-up-cards-1-img'></img>
                            <span className='events-pop-up-cards-1-topic'>Uttarakhand Udyog Mahotsava</span>
                        </div>
                        <div className="events-pop-up-cards-1-btns">
                            <button className="events-pop-up-cards-1-btns-details" onClick={() => {
                                openModal()
                                contentSet("hi")

                            }}>Details</button>
                        </div>
                    </div>

                    {/* <div className="events-pop-up-cards-2">
                        <div className="events-pop-up-cards-2-content-2">
                            <img src={IndustrailVisit} alt='case study' className='events-pop-up-cards-1-img'></img>
                            <span className='events-pop-up-cards-2-topic'>Industrail visit</span>
                        </div>
                        <div className="events-pop-up-cards-2-btns">
                            <button className="events-pop-up-cards-2-btns-details" onClick={openModal('hello')}>Details</button>
                        </div>
                    </div>

                    <div className="events-pop-up-cards-3">
                        <div className="events-pop-up-cards-3-content-3">
                            <img src={InstituteResearchDay} alt='case study' className='events-pop-up-cards-1-img'></img>
                            <span className='events-pop-up-cards-3-topic'>Institute Research day</span>
                        </div>
                        <div className="events-pop-up-cards-3-btns">
                            <button className="events-pop-up-cards-3-btns-details" onClick={openModal("how are you")}>Details</button>
                        </div>
                    </div> */}


                </div>


            </div >
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Payment successful
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Your payment has been successfully submitted. We’ve sent
                                            you an email with all of the details of your order.
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </>
    )

}

export default ModalBox