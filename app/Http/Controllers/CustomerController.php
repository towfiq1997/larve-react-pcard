<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use JeroenDesloovere\VCard\VCard;


class CustomerController extends Controller
{

  public function Allprofile(Request $request){
     $profiles = Customer::all();
     return response()->json($profiles);
  }




  public function UpdteProfile(Request $request){
    $data = $request->all();
    $emilcheck = $data['emailcheck'];
    unset($data['emailcheck']);
    foreach($data as $key => $val){
          if($data[$key]== null){
            $data[$key] = '';
          }
    }

    $profiles = Customer::where('id',$emilcheck)->update($data);
    if(!empty($profiles)){
      return response()->json([
        'status'=>true,
        'data'=>$request->all()
      ]);
    }
  }
  public function Login(Request $request){
    $logindata = $request->all();
    $data = Customer::where([
      ['email','=',$logindata['email']],
      ['password','=',$logindata['password']]
    ])->get();

    if($data){
       return response()->json([
        "status"=>true,
        "email"=>$data[0]['id'],
        "token"=>md5($data[0]['email'])
       ]);
    }
  }
  public function Getprofile(Request $request){
      $profile = Customer::where('id',$request->email)->get();
      return response()->json($profile);

  }
  public function Vcardtest(Request $request){
       $profileid = $request->get('id');
       $profile = Customer::where('id',$profileid)->get()[0];
      //  return response()->json($profile);
      //  die();
       $vcard = new VCard();
       // define variables
       $lastname = '';
       $firstname = '';
       $additional = '';
       $prefix = '';
       $suffix = '';

       if(!empty($profile['name'])){
          $vcard->addName($lastname, $profile['name'], $additional, $prefix, $suffix);
       }
       if(!empty($profile['company'])){
          $vcard->addCompany($profile['company']);
       }
       if(!empty($profile['jobtitle'])){
        $vcard->addJobtitle($profile['jobtitle']);
       }
       if(!empty($profile['email'])){
          $vcard->addEmail($profile['email'],'WORK');
       }
       if(!empty($profile['phone'])){
        $vcard->addPhoneNumber($profile['phone'], 'PREF;WORK');
       }

       $phones = json_decode($profile['add_phones'],true);

      // return print_r($phones);
       if(!empty($phones)){
           foreach($phones as $phone){
            $vcard->addPhoneNumber($phone['fieldVal'], $phone['label']);
           }
       }


       $emails = json_decode($profile['add_emails'],true);
       if(!empty($emails)){
          foreach($emails as $email){
            $vcard->addEmail($email['fieldVal'], $email['label']);
           }
       }

       $location = $profile['location']?$profile['location']:'';
       $addresses = json_decode($profile['add_addresses'],true);
       if(!empty($addresses)){
        foreach($addresses as $add){
            //$vcard->addPhoneNumber($add['fieldVal'], $add['label']);
            $vcard->addAddress($add['fieldVal'], null, '', $location, '',null, '', $add['label']);
           }
       }


       $links = json_decode($profile['add_links'],true);
       if(!empty($links)){
         foreach($links as $link){
            $vcard->addURL($link['fieldVal'], $link['label']);
           }
       }
       
       
// add work data
       
      //  for($i = 0;$i<3;$i++){
      //     $vcard->addPhoneNumber($i, 'WORK');
      //  }
       
      //  //$vcard->addRole('Data Protection Officer');
       
      //  $vcard->addPhoneNumber(1234121212, 'PREF;WORK');
      //  $vcard->addPhoneNumber(123456789, 'WORK');
      //  $vcard->addAddress(null, null, 'street', 'worktown', null, 'workpostcode', 'Belgium');
      //  $vcard->addLabel('street, worktown, workpostcode Belgium');
      //  $vcard->addURL('http://www.jeroendesloovere.be');

       //$vcard->addPhoto(__DIR__ . '/landscape.jpeg');

       //  return response()->json([$vcard->getOutput()]);
       //return $vcard->download();
       $vcard->setSavePath(__DIR__);
       $vcard->save();
       $filename = $vcard->getFilename();
       $extension = $vcard->getFileExtension();
       return response()->file(__DIR__.'/'.$filename.'.'.$extension);
     }
  public function Addcustomer(Request $request){
        $data = $request->all();
         foreach($data as $key => $val){
          if($data[$key]== null){
             $data[$key] = '';
          }
         }

        //  return var_dump($data['jobtitle']);
        $data['profilepicture'] = '';
        $data['coverphoto'] = '';
        $data['add_emails'] = '[]';
        $data['add_addresses'] = '[]';
        $data['add_links'] = '[]';
        $data['add_customfields'] = '[]';
        $data['link'] = '';
        $data['username'] = '';
        if($request->hasFile('profilepicture')){
           $file = $request->file('profilepicture');
           $filename = $file->getClientOriginalName();
           $filename = preg_replace('/\s+/', '', strtolower(date('His').'-'.$filename));
           $request->file('profilepicture')->storeAs('images/',$filename,'public');
           $imagename = $filename;
           $data['profilepicture'] = $imagename;

        }
        $customer = Customer::create($data);
        return response()->json([
            "status" => true,
            "email"  => $customer['id'],
            "token"  => md5($data['email'])
        ]);
  }
}