"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

import CertificateCard from "@/components/CertificateCard";
import { CERTIFICATE_CATEGORY } from "@/utils/constants";
import { certificateData } from "@/utils/data";
import { compareDates } from "@/utils/calculator";

// remove category duplicates
const uniqueCategories = Object.values(CERTIFICATE_CATEGORY);

const Certificates = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState(
    CERTIFICATE_CATEGORY.ALL_CERTIFICATES
  );

  const filteredCerts = [...certificateData]
    .sort((a, b) => compareDates(a.archiveTime, b.archiveTime))
    .filter((cert) => {
      return category === CERTIFICATE_CATEGORY.ALL_CERTIFICATES
        ? cert
        : cert.category === category;
    });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Certificates
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[768px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredCerts.map((certificate, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <CertificateCard certificate={certificate} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};
export default Certificates;
