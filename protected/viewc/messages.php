<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Message</th>
    </tr>
  </thead>
  <tbody>
    <?php  $i=0;  ?>
    <?php foreach($data['messages'] as $k1=>$v1): ?> 
    <tr>
      <td><?php  echo $i++;  ?></td>
      <td><?php echo $v1; ?></td>
    </tr>
    <?php endforeach; ?>

  </tbody>
</table>