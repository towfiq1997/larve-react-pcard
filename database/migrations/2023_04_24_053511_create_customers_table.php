<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->text('jobtitle');
            $table->text('company');
            $table->text('location');
            $table->string('phone');
            $table->string('profilepicture');
            $table->string('coverphoto');
            $table->string('add_phones');
            $table->string('add_emails');
            $table->string('add_addresses');
            $table->string('add_links');
            $table->string('add_customfields');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};