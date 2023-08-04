/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion,AnimatePresence } from 'framer-motion'
import { twMerge } from "tailwind-merge"
import emailjs from '@emailjs/browser'
import { CheckCircle2, Send, XOctagon, AlertTriangle } from 'lucide-react'

import { ModalHeader } from '../../modal-components'
import InputContainer from '../../../inputs/InputContainer.component'
import { ActionButton } from '../../../custom-buttons'
import SocialLinks from '../../../social-medias/SocialLinks.component'
import Alert from '../../../alerts/Alert.component'

import { fadeIn } from '../../../../utils/motion'

import { contacts } from '../../../../constants'

import * as c from './constants'

// TODO: move contact forms to global state
const ContactFormModal = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(c.SUBMIT_STATUS)

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors,},
  } = useForm({
    resolver: zodResolver(c.FormSchema),
    defaultValues: c.FORM_DATA,
  })

  const submitFormData = data => {
    // if success validation
    if (data) {
      const { name, email, message } = data
      setIsLoading(true)
      emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_KEY, 
        import.meta.env.VITE_EMAIL_TEMPLATE_KEY, 
        { from_name: name,
          to_name: 'Wenzie Querubin',
          from_email: email,
          to_email: contacts.email,
          message: message,
        }, import.meta.env.VITE_EMAIL_PRODUCT_KEY)
        .then(response => {
          const { status, text } = response
          if ((status >= 200 && status <= 299) || response.text === 'OK') {
            setIsLoading(false)
            setSubmitStatus({ ...submitStatus, status, text })
            reset()
          }
        }, error => {
          const { status, text } = error
          setIsLoading(false)
          setSubmitStatus({ ...submitStatus, status, text })
        }
      )
    }
  }

  // if FORM SENT - remove submitted icon(check) after set period of time
  useEffect(() => {
    const { status, text } = submitStatus
    if (status && text) {
      setTimeout(() => setSubmitStatus(c.SUBMIT_STATUS), 6000)
    }
  }, [submitStatus])

  const renderAlertStatus = status => {
    if (status >= 200 && status <= 299) {
      return <Alert 
        icon={<CheckCircle2 className="w-10 h-10" />}
        message={"SUCCESS! Thank you for your email. I appreciate your message and will respond soon."}
        bgColor="bg-green-600"
      />
    }  
    if (status >= 300 && status <= 399) return <Alert icon={<AlertTriangle className="w-10 h-10" />} message={`WARNING: ${submitStatus.text}`} bgColor="bg-yellow-500" />
    if (status >= 400 && status <= 599) return <Alert icon={<XOctagon className="w-10 h-10" />} message={`ERROR: ${submitStatus.text}`} />
    return null
  }
  
  return (
    <motion.div
      exit={{ duration: .4, ease: 'ease-in-out'}}
      className="p-4 md:p-8 relative dark:font-light font-normal"
    >
      <AnimatePresence>
        {renderAlertStatus(submitStatus.status)}
      </AnimatePresence>
      <ModalHeader
        header="Contact"
        sub="GET IN TOUCH"
        className="pt-4 overflow-hidden"
      />
      <form onSubmit={handleSubmit(submitFormData)} className="" >
        <InputContainer
          containerClassName="my-6"
          label="Name:"
          htmlFor="name"
          // input props
          { ...register("name")}
          placeholder="First Last"
          name="name"
          id="name"
          type="text"
          errorMessage={errors.name &&
            <i className="dark:text-secondary text-secondary-lt">
              {errors.name.message}
            </i>
          }
        />

        <InputContainer
          containerClassName="my-6"
          label="E-Mail:"
          htmlFor="email"
          // input props
          { ...register("email")}
          placeholder="name@example.com"
          name="email"
          id="email"
          type="text"
          errorMessage={errors.email &&
            <i className="dark:text-secondary text-secondary-lt">
              {errors.email.message}
            </i>
          }
        />
        <InputContainer
          isTextArea
          containerClassName="my-6"
          label="Message:"
          htmlFor="message"
          // input props
          { ...register("message")}
          placeholder="Hello Wenz!"
          name="message"
          id="message"
          type="text"
          rows={4}
          cols={24}
          style={{ resize: "none" }}
          inputClassName=""
          errorMessage={errors.message &&
            <i className="dark:text-secondary text-secondary-lt">
              {errors.message.message}
            </i>
          }
        />

        <motion.div
          variants={fadeIn("", "", 0.2, 1)}
          className="flex gap-x-3 items-center dark:text-secondary text-secondary-lt relative"
        >
          <ActionButton
            label={isLoading ? 'Sending' : "Submit"}
            name="submit"
            type="submit"
            className={twMerge(isLoading && "cursor-not-allowed animate-once animate-pulse", "")}
          />
          <motion.span
            variants={fadeIn("", "", 0.2, 1)}
            className="flex justify-between w-full"
          >
            {(isLoading) &&  <Send className={twMerge(!isLoading && "animate-once", "w-6 h-6 dark:text-accent-2 text-accent-2-lt animate-bounce")} />}
            {submitStatus.status === 200 && submitStatus.text === "OK" &&  <CheckCircle2  className="w-6 h-6 text-green-600 animate-ping animate-once" />}
          </motion.span>

          <div className="flex flex-row absolute right-0 my-auto">
            <SocialLinks resumeLinkOrientation="horizontal" isResumeIcon disableHoverEffect />
          </div>
        </motion.div>
      </form>
    </motion.div>
  )
}

export default ContactFormModal
