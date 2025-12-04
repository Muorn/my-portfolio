import ContactInfo from "@/components/Contact/ContactInfo";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact | Daniel Xavier B. Legaspi",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Get in Touch"
        description="I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
    </>
  );
};

export default page;
