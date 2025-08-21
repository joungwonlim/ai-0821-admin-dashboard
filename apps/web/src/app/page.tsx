import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Component Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-300 border-2">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>This is a card description.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the card content. It demonstrates the hover effect as per the design principles.</p>
          </CardContent>
          <CardFooter>
            <Button className="bg-primary">Primary Button</Button>
          </CardFooter>
        </Card>
         <Card className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-green-500 dark:hover:border-green-300 border-2">
          <CardHeader>
            <CardTitle>Another Card</CardTitle>
            <CardDescription>This card uses the new custom colors.</CardDescription>
          </CardHeader>
          <CardContent>
             <p>The button below uses the custom green color.</p>
          </CardContent>
          <CardFooter>
            <Button style={{ backgroundColor: 'var(--custom-green)' }}>Green Button</Button>
          </CardFooter>
        </Card>
         <Card className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-orange-500 dark:hover:border-orange-300 border-2">
          <CardHeader>
            <CardTitle>Third Card</CardTitle>
            <CardDescription>This card uses the new custom colors.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>The button below uses the custom orange color.</p>
          </CardContent>
          <CardFooter>
            <Button style={{ backgroundColor: 'var(--custom-orange)' }}>Orange Button</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
