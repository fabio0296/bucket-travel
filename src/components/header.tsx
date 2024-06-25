"use client"

import { Button } from "@/components/ui/button"
import { SignoutWithGitHub } from "@visit-it/utils/supabase/github-provider"

export function AppHeader(){
  return (<Button onClick={ async() => (SignoutWithGitHub())}>Sign Out</Button>)
}