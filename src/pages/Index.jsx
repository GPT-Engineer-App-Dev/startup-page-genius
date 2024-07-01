import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

function Index() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg-placeholder.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Revolutionize Your Workflow</h1>
          <p className="mt-4 text-xl">Our SaaS solution helps you manage your tasks efficiently</p>
          <div className="mt-6 space-x-4">
            <Button variant="primary" size="lg">Try for Free</Button>
            <Button variant="secondary" size="lg">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Features</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <img src="/images/feature-icon-placeholder.png" alt="Feature 1" className="mx-auto h-12 w-12" />
                <CardTitle className="mt-4">Feature 1</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Brief description of feature 1.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img src="/images/feature-icon-placeholder.png" alt="Feature 2" className="mx-auto h-12 w-12" />
                <CardTitle className="mt-4">Feature 2</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Brief description of feature 2.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img src="/images/feature-icon-placeholder.png" alt="Feature 3" className="mx-auto h-12 w-12" />
                <CardTitle className="mt-4">Feature 3</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Brief description of feature 3.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">What Our Users Say</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <img src="/images/user-placeholder.png" alt="User 1" className="mx-auto h-12 w-12 rounded-full" />
                <CardTitle className="mt-4">User 1</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>"Testimonial from user 1."</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img src="/images/user-placeholder.png" alt="User 2" className="mx-auto h-12 w-12 rounded-full" />
                <CardTitle className="mt-4">User 2</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>"Testimonial from user 2."</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img src="/images/user-placeholder.png" alt="User 3" className="mx-auto h-12 w-12 rounded-full" />
                <CardTitle className="mt-4">User 3</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>"Testimonial from user 3."</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Pricing</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Basic Plan</CardTitle>
                <CardDescription className="mt-4 text-4xl font-bold">$9.99</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mt-4 space-y-2">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pro Plan</CardTitle>
                <CardDescription className="mt-4 text-4xl font-bold">$19.99</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mt-4 space-y-2">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Enterprise Plan</CardTitle>
                <CardDescription className="mt-4 text-4xl font-bold">$49.99</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mt-4 space-y-2">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <div className="mb-4 space-x-4">
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#terms" className="hover:underline">Terms of Service</a>
            <a href="#contact" className="hover:underline">Contact Us</a>
          </div>
          <div className="space-x-4">
            <a href="#twitter" className="hover:underline">Twitter</a>
            <a href="#linkedin" className="hover:underline">LinkedIn</a>
            <a href="#facebook" className="hover:underline">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;