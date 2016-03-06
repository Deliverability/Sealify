alice_pgp_key = fs.readFileSync('./priv.asc', 'utf-8');
alice_passphrase = "xdlol";

kbpgp.KeyManager.import_from_armored_pgp({
  armored: alice_pgp_key
}, function(err, alice) {
  if (!err) {
    if (alice.is_pgp_locked()) {
      alice.unlock_pgp({
        passphrase: alice_passphrase
      }, function(err) {
        if (!err) {
          console.log("Loaded private key with passphrase");

      var params = {
        msg:         "Chuck chucky, bo-bucky!",
        encrypt_for: alice
      };

    kbpgp.box(params, function(err, result_string, result_buffer) {
      console.log(err, result_string);
      nex(alice, result_string);
    });
        }
      });
    }
    else {
      console.log("Loaded private key w/o passphrase");
      var params = {
        msg:         "Chuck chucky, bo-bucky!",
        encrypt_for: alice
      };

    kbpgp.box(params, function(err, result_string, result_buffer) {
      console.log(err, result_string);
      nex(alice, result_string);
    });
    }

  }
});

var nex = function(alice, dec) {
  console.log(dec);
  var ring = new kbpgp.keyring.KeyRing;
  var kms = [alice];
  var pgp_msg = dec;
  //var asp = /* as in Encryption ... */;
  for (var i in kms) {
    ring.add_key_manager(kms[i]);
  }
  kbpgp.unbox({keyfetch: ring, armored: pgp_msg }, function(err, literals) {
    if (err != null) {
      return console.log("Problem: " + err);
    } else {
      console.log("decrypted message");
      console.log(literals[0].toString());
      var ds = km = null;
      ds = literals[0].get_data_signer();
      if (ds) { km = ds.get_key_manager(); }
      if (km) {
        console.log("Signed by PGP fingerprint");
        console.log(km.get_pgp_fingerprint().toString('hex'));
      }
    }
  });
}

