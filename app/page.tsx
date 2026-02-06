'use client';

import { useAuth, SignUpButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link2, BarChart3, Lock, Zap, Globe, QrCode } from 'lucide-react';

export default function Home() {
  const { userId, isLoaded } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (isLoaded && userId) {
      router.push('/dashboard');
    }
  }, [isLoaded, userId, router]);

  if (!isLoaded || userId) {
    return null;
  }

  const features = [
    {
      icon: Link2,
      title: 'Easy Link Shortening',
      description: 'Transform long URLs into short, shareable links in seconds with our intuitive interface.',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Tracking',
      description: 'Get detailed insights on clicks, geographic data, and referral sources for all your links.',
    },
    {
      icon: Lock,
      title: 'Secure & Reliable',
      description: 'Your links are protected with enterprise-grade security and guaranteed uptime.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Ultra-fast redirects ensure your users reach their destination without delay.',
    },
    {
      icon: Globe,
      title: 'Custom Domains',
      description: 'Use your own branded domain to maintain consistency and build trust.',
    },
    {
      icon: QrCode,
      title: 'QR Code Generation',
      description: 'Automatically generate QR codes for your shortened links for offline sharing.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Shorten Your Links,
            <span className="block text-primary"> Amplify Your Reach</span>
          </h1>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Create powerful short links that are easy to share, track, and manage. 
            Perfect for marketers, content creators, and businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignUpButton mode="modal">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800"
              >
                Get Started Free
              </Button>
            </SignUpButton>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-foreground/70">
              Powerful features to manage and optimize your links
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-foreground/70">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </CardTitle>
              <CardDescription className="text-primary-foreground/95 text-lg">
                Join thousands of users who trust our platform to manage their links
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <SignUpButton mode="modal">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-black hover:bg-gray-100"
                >
                  Create Your First Link
                </Button>
              </SignUpButton>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-foreground/60">
            <p>&copy; {new Date().getFullYear()} Link Shortener. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
