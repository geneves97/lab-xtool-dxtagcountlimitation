--**********************************
--Ajuste do NLS_CHARACTERSET
--**********************************
connect sys/oracle as sysdba;
shutdown;
startup restrict;
Alter database character set INTERNAL_USE WE8ISO8859P1;
shutdown immediate;
startup;
connect system/oracle

--**********************************
--Tuning OracleXE
--**********************************
alter system set filesystemio_options=directio scope=spfile;
alter system set disk_asynch_io=false scope=spfile;

--**********************************
--Esquema labxtooldxtagcoutlimitation
--**********************************

create tablespace labxtooldxtagcoutlimitation datafile '/u01/app/oracle/oradata/XE/labxtooldxtagcoutlimitation01.dbf' size 100M online;
create tablespace idx_labxtooldxtagcoutlimitation datafile '/u01/app/oracle/oradata/XE/idx_labxtooldxtagcoutlimitation01.dbf' size 100M;
create user labxtooldxtagcoutlimitation identified by labxtooldxtagcoutlimitation default tablespace labxtooldxtagcoutlimitation temporary tablespace temp;
grant resource to labxtooldxtagcoutlimitation;
grant connect to labxtooldxtagcoutlimitation;
grant create view to labxtooldxtagcoutlimitation;
grant create procedure to labxtooldxtagcoutlimitation;
grant create materialized view to labxtooldxtagcoutlimitation;
alter user labxtooldxtagcoutlimitation default role connect, resource;
exit;
