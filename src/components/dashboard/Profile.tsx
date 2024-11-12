"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  CalendarDays,
  GitBranch,
  GitCommit,
  GitPullRequest,
  MapPin,
  Users,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { Session } from "@/app/api/session";
import { useState } from "react";

const Profile = ({ session }: { session: Session }) => {
  const [activeTab, setActiveTab] = useState("profile");
  return (
    <Card className="w-full max-w-4xl mx-auto pt-8">
      <CardContent>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
          <Image
            src={session.avatar_url}
            alt={session.name}
            width={150}
            height={150}
            className="rounded-full"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Welcome, {session.name}!
            </h1>
            <p className="text-muted-foreground mb-2">@{session.login}</p>
            <p className="text-sm text-muted-foreground mb-4">{session.bio}</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-2 h-4 w-4" />
              {session.location}
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Your GitHub profile details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Email:</span>
                  <span>{session.email || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Joined:</span>
                  <span>
                    {new Date(session.created_at).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Last Updated:</span>
                  <span>
                    {new Date(session.updated_at).toLocaleDateString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest GitHub actions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <GitCommit className="mr-2 h-4 w-4" />
                  <span>Committed to main branch of project-x</span>
                </div>
                <div className="flex items-center">
                  <GitPullRequest className="mr-2 h-4 w-4" />
                  <span>Opened pull request in project-y</span>
                </div>
                <div className="flex items-center">
                  <GitBranch className="mr-2 h-4 w-4" />
                  <span>Created new branch in project-z</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Activity
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="stats">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Repositories
                  </CardTitle>
                  <GitBranch className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {session.public_repos}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Followers
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{session.followers}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Following
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{session.following}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Account Age
                  </CardTitle>
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {Math.floor(
                      (new Date().getTime() -
                        new Date(session.created_at).getTime()) /
                        (1000 * 60 * 60 * 24 * 365)
                    )}{" "}
                    years
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Profile;
