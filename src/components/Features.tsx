import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-200 dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Key Features
        </h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <Card>
            <CardHeader>
              <CardTitle>No External Dependencies</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Implement GitHub OAuth without relying on external
                authentication libraries.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Session Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Efficient session handling without interfering with your
                existing setup.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Easy Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Seamlessly integrate GitHub authentication into your Next.js
                application.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
