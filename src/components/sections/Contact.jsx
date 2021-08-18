import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dialog, Transition } from '@headlessui/react';
import { useForm, ValidationError } from '@formspree/react';
import styles from '../fragments/Button/Button.module.css';
import { contact as data } from '../../appData';

import Container from '../layout/Container';
import Button from '../fragments/Button';
import SectionHeading from '../fragments/SectionHeading';
import Divide from '../fragments/Divide';

const Contact = React.memo(() => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  let [notified, setNotified] = React.useState(false);
  const notify = () => {
    if (!notified) {
      setNotified(true);
      toast('Message sent!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <Container className={`text-gray-600`}>
        <SectionHeading className={`uppercase`} title={data.title} />
        <div className={`space-y-4 my-4`}>
          {data.details.map((item, idx) => {
            return (
              <div className={`flex items-center space-x-4 hover:text-green-500`} key={idx}>
                <item.icon />
                <a href={item.data} target='_blank' rel='noopener noreferrer'>
                  {item.data.split(':')[1] && item.data.split(':')[1][0] !== '/'
                    ? item.data.split(':')[1]
                    : item.data.split('//')[1]
                    ? item.data.split('//')[1]
                    : item.data}
                </a>
              </div>
            );
          })}
        </div>
        <div className={`mt-6`}>
          {!notified ? (
            <Button
              onClick={() => {
                setIsDialogOpen(true);
              }}
              text={data.buttonText}
              icon={<data.buttonIcon />}
              placement={`right`}
            />
          ) : (
            <p>Thanks for reaching out!</p>
          )}
        </div>
        <Divide />
      </Container>
      <ContactForm isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} notify={notify} />
    </>
  );
});

const ContactForm = React.memo(({ isDialogOpen, setIsDialogOpen, notify }) => {
  const [state, handleSubmit] = useForm('xknkpbqk');
  if (state.succeeded) {
    notify();
    setIsDialogOpen(false);
  }

  // if (state.errors) {
  //   setIsDialogOpen(false);
  // }

  return (
    <Transition
      show={isDialogOpen}
      enter='transition duration-100 ease-out'
      enterFrom='transform scale-95 opacity-0'
      enterTo='transform scale-100 opacity-100'
      leave='transition duration-75 ease-out'
      leaveFrom='transform scale-100 opacity-100'
      leaveTo='transform scale-95 opacity-0'
    >
      <Dialog style={{ zIndex: '500' }} className='fixed inset-0 overflow-y-auto' open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <div className='flex items-center justify-center min-h-screen'>
          <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />

          <div className=' bg-white rounded-lg max-w-md w-full m-4 px-6 py-6 space-y-2 shadow-lg z-10'>
            <form onSubmit={handleSubmit} className={`flex flex-col space-y-6 mt-6`}>
              <div className={`space-y-6 md:space-y-0 md:space-x-6 flex flex-col md:flex-row items-center w-full`}>
                <input
                  className={`w-full border border-gray-200 p-4 rounded-lg focus:outline-none`}
                  id='fName'
                  type='text'
                  name='First Name'
                  placeholder={`First Name`}
                  spellCheck={false}
                  required
                />
                <ValidationError prefix='First Name' field='fName' errors={state.errors} />
                <input
                  className={`w-full border border-gray-200 p-4 rounded-lg focus:outline-none`}
                  id='lName'
                  type='text'
                  name='Last Name'
                  placeholder={`Last Name`}
                  spellCheck={false}
                />
                <ValidationError prefix='Last Name' field='lName' errors={state.errors} />
              </div>

              <div className={`space-y-6 md:space-y-0 md:space-x-6 flex flex-col md:flex-row items-center w-full`}>
                <input
                  className={`w-full border border-gray-200 p-4 rounded-lg focus:outline-none`}
                  id='Email'
                  type='email'
                  name='Email'
                  placeholder={`Email`}
                  spellCheck={false}
                  required
                />
                <ValidationError prefix='Email' field='Email' errors={state.errors} />
                <input
                  className={`w-full border border-gray-200 p-4 rounded-lg focus:outline-none`}
                  id='Phone'
                  type='tel'
                  name='Phone'
                  placeholder={`Phone`}
                  spellCheck={false}
                  required
                />
                <ValidationError prefix='Phone' field='Phone' errors={state.errors} />
              </div>
              <textarea
                style={{ resize: 'none' }}
                rows={5}
                className={`border border-gray-200 p-4 rounded-lg focus:outline-none`}
                id='Message'
                name='Message'
                placeholder={`Message`}
                spellCheck={false}
                required
              />
              <ValidationError prefix='Message' field='Message' errors={state.errors} />

              <div className={`space-x-4 flex items-center justify-between pt-4`}>
                <button
                  className={`bg-green-500 text-base text-white rounded-full w-36 ${styles.button} transition_all border-2 border-green-500 hover:bg-green-500 hover:text-white px-4 py-2 sm:px-6 sm:text-lg rounded-3xl flex items-center justify-center`}
                  type='submit'
                  disabled={state.submitting}
                >
                  Submit
                </button>
                <button
                  className={`flex items-center justify-center rounded-full w-36 px-4 py-2 cursor-pointer
                                    border-2 border-gray-500
                                    text-gray-500 hover:text-gray-100 hover:bg-gray-500 font-sans
                                    font-medium`}
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
});

export default Contact;
