"use client";

import { useState } from "react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardFooter,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";

import { Upload, Copy } from "lucide-react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
      name: "Mountain Vista",
    },
    {
      url: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?w=500&q=80",
      name: "Ocean Sunset",
    },
    {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80",
      name: "Forest Path",
    },
    {
      url: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=500&q=80",
      name: "Desert Dunes",
    },
    {
      url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&q=80",
      name: "City Skyline",
    },
    {
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&q=80",
      name: "Snowy Peaks",
    },
    {
      url: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=500&q=80",
      name: "Tropical Beach",
    },
    {
      url: "https://images.unsplash.com/photo-1501261379837-c3b516327829?w=500&q=80",
      name: "Autumn Colors",
    },
    {
      url: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=500&q=80",
      name: "Lavender Fields",
    },
    {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80",
      name: "Northern Lights",
    },
    {
      url: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=500&q=80",
      name: "Cherry Blossoms",
    },
    {
      url: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=500&q=80",
      name: "Grand Canyon",
    },
    {
      url: "https://images.unsplash.com/photo-1498855926480-d98e83099315?w=500&q=80",
      name: "Venetian Canals",
    },
    {
      url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=500&q=80",
      name: "Sahara Desert",
    },
    {
      url: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=500&q=80",
      name: "Great Barrier Reef",
    },
    {
      url: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=500&q=80",
      name: "Machu Picchu",
    },
    {
      url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&q=80",
      name: "Taj Mahal",
    },
    {
      url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&q=80",
      name: "Santorini Sunset",
    },
    {
      url: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=500&q=80",
      name: "Amazon Rainforest",
    },
  ];

  return (
    <div className="container mx-auto min-h-screen bg-background p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {/* Side Card */}
        <Card className="md:block">
          <CardHeader>
            <CardTitle>wiki{"{obj}"}</CardTitle>
            <CardDescription>
              A brief description of the wiki object and its purpose.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Dialog>
              <DialogTrigger asChild>
            <Button className="w-full">
              <Upload className="mr-2 h-4 w-4" /> Upload
            </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Upload new {"{obj}"}</DialogTitle>
                  <DialogDescription>
                    Add a new image, with a brief description. Upload when you're done!
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="Mona Lisa"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Description
                    </Label>
                    <Input
                      id="description"
                      defaultValue="A really cool painting by an Italian guy named da Vinci."
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>

        {/* Image Grid */}
        {images.map((image, index) => (
          <Card
            key={index}
            className="cursor-pointer overflow-hidden bg-background transition-transform hover:scale-105"
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative pb-[75%]">
              {" "}
              {/* 4:3 aspect ratio */}
              <img
                src={image.url}
                alt={image.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute bottom-2 left-2 rounded bg-gray-900 bg-opacity-70 px-2 py-1 text-xs font-semibold text-gray-200">
                {image.name}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setSelectedImage(null)}
        >
          <Card className="max-h-full max-w-3xl border-gray-700 bg-gray-800 p-4">
            {images[selectedImage] && ( // Check if image exists
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].name}
                className="max-h-full max-w-full rounded-lg object-contain"
              />
            )}
          </Card>
        </div>
      )}
    </div>
  );
}
