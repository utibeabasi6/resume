import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';
// import styles from '../fragments/Button/Button.module.css';
import { contact as data } from '../../appData';

import Container from '../layout/Container';
import Button from '../fragments/Button';
import SectionHeading from '../fragments/SectionHeading';
import Divide from '../fragments/Divide';

const Contact = () => {
  return (
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
        <Button text={data.buttonText} icon={<data.buttonIcon onClick={() => {}} />} placement={`right`} />
      </div>
      <Divide />
    </Container>
  );
};

// const ContactForm = () => {
//   const [state, handleSubmit] = useForm('xknkpbqk');
//   if (state.succeeded) {
//     return <p>Thanks for reaching out, we will get back to you soon!</p>;
//   }
//   return (
//     <form onSubmit={handleSubmit} className={`flex flex-col space-y-6 mt-6`}>
//       <div className={`space-y-6 md:space-y-0 md:space-x-6 flex flex-col md:flex-row items-center w-full`}>
//         <input
//           className={`w-full border border-gray-200 p-4 rounded-lg focus:outline-none`}
//           id='fName'
//           type='text'
//           name='First Name'
//           placeholder={`First Name`}
//           spellCheck={false}
//           required
//         />
//         <ValidationError prefix='First Name' field='fName' errors={state.errors} />
//         <input
//           className={`w-full border border-gray-200 p-4 rounded-lg focus:outline-none`}
//           id='lName'
//           type='text'
//           name='Last Name'
//           placeholder={`Last Name`}
//           spellCheck={false}
//         />
//         <ValidationError prefix='Last Name' field='lName' errors={state.errors} />
//       </div>

//       <div className={`space-y-6 md:space-y-0 md:space-x-6 flex flex-col md:flex-row items-center w-full`}>
//         <input
//           className={`w-full border border-gray-200 p-4 rounded-lg focus:outline-none`}
//           id='Email'
//           type='email'
//           name='Email'
//           placeholder={`Email`}
//           spellCheck={false}
//           required
//         />
//         <ValidationError prefix='Email' field='Email' errors={state.errors} />
//         <input
//           className={`w-full border border-gray-200 p-4 rounded-lg focus:outline-none`}
//           id='Phone'
//           type='tel'
//           name='Phone'
//           placeholder={`Phone`}
//           spellCheck={false}
//           required
//         />
//         <ValidationError prefix='Phone' field='Phone' errors={state.errors} />
//       </div>
//       <textarea
//         style={{ resize: 'none' }}
//         rows={5}
//         className={`border border-gray-200 p-4 rounded-lg focus:outline-none`}
//         id='Message'
//         name='Message'
//         placeholder={`Message`}
//         spellCheck={false}
//         required
//       />
//       <ValidationError prefix='Message' field='Message' errors={state.errors} />

//       <button
//         className={`bg-green-500 text-base text-white rounded-full w-36 ${styles.button} transition_all border-2 border-green-500 hover:bg-green-500 hover:text-white px-4 py-2 sm:px-6 sm:text-lg rounded-3xl flex items-center justify-center`}
//         type='submit'
//         disabled={state.submitting}
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

export default Contact;
