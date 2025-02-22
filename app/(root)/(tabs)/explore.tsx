import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase';
import { Session } from '@supabase/supabase-js';
import { Link, Redirect } from 'expo-router';

const Explore = () => {
  const [session, setSession] = useState<Session|null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };

    checkSession();
  }, []);

  async function insertSomething() {
      try{
        const { data, error } = await supabase.from('cars').insert({
          brand: 'BMW',
          price: 100000,
        });
      }catch(e){
        console.log(e);
      }finally{
        setLoading(false);
      }
  }

  return (
    <View>
      {session ? (
        <View>
        <Text>Welcome, {session.user.email}</Text>
        <Button onPress={insertSomething} title="Insert Something" disabled={loading}/>
        </View>
      ) : (
        <Text>Redirecting to <Link href="/sign-in">login</Link></Text>
      )}
    </View>
  );
}

export default Explore