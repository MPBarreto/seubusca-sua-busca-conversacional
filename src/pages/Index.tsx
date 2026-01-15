import { HeroSection } from '@/components/HeroSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { ExamplesSection } from '@/components/ExamplesSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ExamplesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
