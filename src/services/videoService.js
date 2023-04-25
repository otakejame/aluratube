import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://aqschqfmlkbsrxzoskrg.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxc2NocWZtbGtic3J4em9za3JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1NTc3NTYsImV4cCI6MTk5NjEzMzc1Nn0.S_GLjU7pf2UouRZ6YDO4qdZKi5pMwrDLfpdPxQjIzE8";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);



export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}