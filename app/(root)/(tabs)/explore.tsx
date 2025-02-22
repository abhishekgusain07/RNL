import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase';
import { Session } from '@supabase/supabase-js';
import { Link, Redirect } from 'expo-router';

const Explore = () => {
  const [session, setSession] = useState<Session|null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };

    checkSession();
  }, []);

  return (
    <View>
      {session ? (
        <Text>Welcome, {session.user.email}</Text>
      ) : (
        <Text>Redirecting to <Link href="/sign-in">login</Link></Text>
      )}
    </View>
  );
}

export default Explore