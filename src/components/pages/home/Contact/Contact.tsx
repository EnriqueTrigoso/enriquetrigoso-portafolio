import { Mail, MapPinCheck, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import Form from './Form'

const Contact = () => {

  const t = useTranslations("contact")

  return (
    <section id="contact" className="relative py-32 bg-border">
      <div
        className="absolute inset-0 bg-center"
        style={{ backgroundImage: 'url("/assets/images/bg/contact-bg-01.png")' }}
      ></div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Section */}
          <div>
            <div className="mb-8">
              <span className="text-sm font-medium text-white flex items-center">
                <Image
                  src="/assets/images/shape/small-arrow.png"
                  alt="arrow"
                  className="mr-2"
                  width={30}
                  height={30}
                />
                {t("subtitle")}
              </span>
              <h2 className="text-4xl font-bold text-white mt-4">
                {t("title")}
              </h2>
            </div>
            <div className="space-y-6">
              {/* Contact Item 1 */}
              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 p-3 rounded-full">
                  <Phone width={18} />
                </div>
                <div>
                  <span className="text-sm text-gray-300">{t("data.phone.title")}</span>
                  <h6 className="text-lg text-white">
                    <a href="tel:+12346691234" className="hover:text-accent">
                      {t("data.phone.number")}
                    </a>
                  </h6>
                </div>
              </div>
              {/* Contact Item 2 */}
              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 p-3 rounded-full">
                  <Mail width={18} />
                </div>
                <div>
                  <span className="text-sm text-gray-300">{t("data.email.title")}</span>
                  <h6 className="text-lg text-white">
                    <a href="mailto:hello@flixta.com" className="hover:text-accent">
                      {t("data.email.account")}
                    </a>
                  </h6>
                </div>
              </div>
              {/* Contact Item 3 */}
              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 p-3 rounded-full">
                  <MapPinCheck width={18} />
                </div>
                <div>
                  <span className="text-sm text-gray-300">{t("data.address.title")}</span>
                  <h6 className="text-lg text-white">
                    <a href="#" className="hover:text-accent">
                      {t("data.address.locale")}
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact