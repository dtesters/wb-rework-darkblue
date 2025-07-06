import Link from 'next/link';
import { useState, useEffect } from 'react';
import DiscordIcon from './icons/discord';
import FAQIcon from './icons/faq';
import RulesIcon from './icons/rules';
import ScamsIcon from './icons/scams';

// The Card component is defined right here for simplicity
const Card = ({ title, description, href, icon: Icon }) => (
  <Link
    href={href}
    className="block p-6 bg-primary border border-border-color rounded-lg transition-all duration-200 ease-in-out hover:border-accent hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/10"
  >
    <div className="flex items-center mb-2">
      {Icon && <Icon />}
      <h3 className="ml-3 text-xl font-bold text-text-main">{title}</h3>
    </div>
    <p className="text-text-secondary">{description}</p>
  </Link>
);

// This is the component that contains the entire page layout and logic
export default function Homepage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerClasses = `
    flex flex-col items-center justify-center min-h-[80vh] px-4 
    transition-opacity duration-300 ease-in-out
    ${isMounted ? 'opacity-100' : 'opacity-0'}
  `;

  return (
    <div className={containerClasses}>
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black dark:text-white mb-4">
          No Text To Speech
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
          The official community hub. Find our rules, guides, and important information.
        </p>
      </div>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        <Card 
          title="Rules" 
          description="Read our server and community guidelines." 
          href="/rules" 
          icon={RulesIcon} 
        />
        <Card 
          title="Scams" 
          description="Learn how to identify and avoid common scams." 
          href="/scams" 
          icon={ScamsIcon} 
        />
        <Card 
          title="FAQ" 
          description="Find answers to frequently asked questions." 
          href="/faq" 
          icon={FAQIcon} 
        />
        <Card 
          title="Discord" 
          description="Join our official Discord server to chat." 
          href="https://discord.gg/ntts" 
          icon={DiscordIcon} 
        />
      </div>
    </div>
  );
}