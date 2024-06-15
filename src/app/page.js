import Image from "next/image";
import styles from "./page.module.css";
import CreatorInfo from "./components/CreatorInfo/CreatorInfo";
import NavigationSlide from "./components/NavigationSlide/NavigationSlide";
import HeroSection from "./components/HeroSection/HeroSection";
import HeroSectionAboutImage from "../resources/images/shamblen-studios-lJt-3NUFng4-unsplash.jpg"
import HeroSectionOrganisationImage from "../resources/images/noiseporn-JNuKyKXLh8U-unsplash.jpg"

export default function Home() {
  const aboutText = "Wir sind eine kleine Agentur, die Influencer managt und Brands bei Kampagnen unterstützt. Mit kreativen Ideen sorgen wir dafür, dass Influencer und Marken glänzen."
  const organisationText = "Wir sind eine kleine Agentur, die Influencer managt und Brands bei Kampagnen unterstützt. Mit kreativen Ideen sorgen wir dafür, dass Influencer und Marken glänzen."
  const tempText = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero"

  return (
    <main className={styles.main}>
      <HeroSection
        title="Über uns"
        description={tempText}
        image={HeroSectionAboutImage}
        textPos="right" />
      <HeroSection
        title="Organisation"
        description={tempText}
        image={HeroSectionOrganisationImage} />
      <CreatorInfo />
    </main>
  );
}
