import React from 'react';
import styles from './Services.module.css';
import ServiceCard from '../ServiceCard/ServiceCard';

const serviceData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0e877e2323ad4ccbb9853dce5c066e0517b17ccbcea79fa5ac2e4e24f7695ef?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a",
    title: "Terakreditasi",
    description: "Telah terdaftar di Kementerian Agama RI dengan SK No. 28092100388350003."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/16944ddc35cc8a71e0769661aa0a8cab0aef3e029e26257ead19eb696ef838bf?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a",
    title: "Terpercaya",
    description: "Memberikan layanan standar pelaksanaan ibadah Umroh sesuai dengan tuntunan Rasulullah dan mengupayakan kenyamanan dan kebersahajaan dalam perjalanan ibadah."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f70d0bb86c1a7a773c034684f9ab6764278869aebdfeacf3dbe66b5b4541b078?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a",
    title: "Profesional",
    description: "Memberikan pemahaman spiritual melalui manasik dan komprehensif serta layanan fungsi intergral dalam perjalanan Umroh."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5fd3d69f0d20e224e183d89903cbcbcf986be5d02acca3282ca75c874dd47943?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a",
    title: "Dapat Diandalkan",
    description: "Memberikan jaminan layanan dan pendampingan sebelum keberangkatan, selama di tanah suci sampai kepulangan agar layanan kenyamanan jamaah terpenuhi."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ca57ecfd7ec3b075c695a8af9f408d0e8e2bd3118928914a3a05143ea6e5da4?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a",
    title: "Variasi Paket",
    description: "Progam yang beragam di setiap paket, sehingga anda dapat memilih progam yang sesuai dengan kebutuhan anda."
  }
];

const Services = () => {
  return (
    <section className={styles.serviceSection}>
      <h2 className={styles.sectionTitle}>Layanan Perjalan Ibadah Profesional</h2>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e02aa690f9d5a6d9160df10a3566a2327d989d3568a0daca106cbc8bb44bd6b4?placeholderIfAbsent=true&apiKey=72349058f37c4243b6656b8369de8f4a" alt="Decorative divider" className={styles.divider} />
      <div className={styles.cardContainer}>
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;